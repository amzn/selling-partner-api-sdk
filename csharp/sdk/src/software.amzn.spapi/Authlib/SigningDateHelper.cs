using System;
namespace software.amzn.spapi.Auth
{
    public class SigningDateHelper : IDateHelper
    {
        public DateTime GetUtcNow()
        {
            return DateTime.UtcNow;
        }
    }
}
