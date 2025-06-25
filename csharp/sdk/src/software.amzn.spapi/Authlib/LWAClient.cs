using System;
using System.Collections.Generic;
using System.IO;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using RestSharp;
using System.Collections.Concurrent;
using System.Threading;
using System.Threading.Tasks;

namespace software.amzn.spapi.Auth
{
    public class LWAClient
    {
        public const string AccessTokenKey = "access_token";
        public const string AccessTokenExpireKey = "expires_in";
        public const string ErrorCodeKey = "error";
        public const string ErrorDescKey = "error_description";
        public const string JsonMediaType = "application/json";

        // default access_token duration is 3600 seconds
        public TimeSpan accessTokenDuration = TimeSpan.FromSeconds(3600);
        //public const string JsonMediaType = "application/x-www-form-urlencoded";
        public RestClient RestClient { get; set; }

        private string _accessToken;
        private DateTime _expireAt;

        private readonly object _lock = new object();

        public LWAAccessTokenRequestMetaBuilder LWAAccessTokenRequestMetaBuilder { get; set; }
        public LWAAuthorizationCredentials LWAAuthorizationCredentials { get; private set; }


        public LWAClient(LWAAuthorizationCredentials lwaAuthorizationCredentials)
        {
            LWAAuthorizationCredentials = lwaAuthorizationCredentials;
            LWAAccessTokenRequestMetaBuilder = new LWAAccessTokenRequestMetaBuilder();
            RestClient = new RestClient(LWAAuthorizationCredentials.Endpoint.GetLeftPart(System.UriPartial.Authority));
            _accessToken = null;
            _expireAt = DateTime.UtcNow.Add(accessTokenDuration);
        }

        /// <summary>
        /// Retrieves access token from LWA
        /// </summary>
        /// <param name="lwaAccessTokenRequestMeta">LWA AccessTokenRequest metadata</param>
        /// <returns>LWA Access Token</returns>
        public virtual string GetAccessToken()
        {
            LWAAccessTokenRequestMeta lwaAccessTokenRequestMeta = LWAAccessTokenRequestMetaBuilder.Build(LWAAuthorizationCredentials);
            var accessTokenRequest = new RestRequest(LWAAuthorizationCredentials.Endpoint.AbsolutePath, Method.Post);

            string jsonRequestBody = JsonConvert.SerializeObject(lwaAccessTokenRequestMeta);

            accessTokenRequest.AddParameter(JsonMediaType, jsonRequestBody, ParameterType.RequestBody);

            string accessToken;

            LWAExceptionErrorCode errorCode;

            try
            {
                lock (_lock)
                {
                    if (_accessToken != null && _expireAt > DateTime.UtcNow)
                    {
                        // access token is valid
                        return _accessToken;
                    }
                }
                var response = RestClient.Execute(accessTokenRequest);
                JObject responseJson = !String.IsNullOrEmpty(response.Content) ? JObject.Parse(response.Content) : null;

                if (!IsSuccessful(response))
                {
                    if (responseJson != null)
                    {
                        // If error code is present check error code if its one of the defined LWAExceptionErrorCode values
                        var parsedErrorCode = responseJson.ContainsKey(ErrorCodeKey) ? Enum.TryParse(responseJson.GetValue(ErrorCodeKey).ToString(), out errorCode) : false;

                        if (parsedErrorCode) // throw error code and description if matches defined values
                        {
                            throw new LWAException(responseJson.GetValue(ErrorCodeKey).ToString(), responseJson.GetValue(ErrorDescKey).ToString(), "Error getting LWA Access Token");
                        }
                    } //else throw general LWA exception
                    throw new LWAException(LWAExceptionErrorCode.other.ToString(), "Other LWA Exception", "Error getting LWA Access Token");
                }
                accessToken = responseJson.GetValue(AccessTokenKey).ToString();
                int latestDuration = responseJson.GetValue(AccessTokenExpireKey).Value<int>();
                TimeSpan latestDurationSpan =  TimeSpan.FromSeconds(latestDuration);
                DateTime currentExpire = DateTime.UtcNow.Add(accessTokenDuration);
                lock (_lock)
                {
                    if (_accessToken == null || _expireAt <= DateTime.UtcNow)
                    {
                        // double check current access token is either empty or invalid after reagining the lock 
                        _accessToken = accessToken;
                        _expireAt = currentExpire;
                        return _accessToken;
                    }
                    else
                    {
                        // there is another thread setting the value early than current thread, then no action needed here, 
                        // just re-use the latest value
                        return _accessToken;
                    }
                }
            }
            catch (LWAException e)
            {
                // during exception when get new access token, need to empty the access token
                _accessToken = null;
                throw new LWAException(e.getErrorCode(), e.getErrorMessage(), e.Message);
            }
            catch (Exception e)
            {
                //during exception when get new access token, need to empty the access token
                _accessToken = null;
                throw new SystemException("Error getting LWA Access Token", e);
            }

        }

        private bool IsSuccessful(RestResponse response)
        {
            int statusCode = (int)response.StatusCode;
            return statusCode >= 200 && statusCode <= 299 && response.ResponseStatus == ResponseStatus.Completed;
        }
    }
}
