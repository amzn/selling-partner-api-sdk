using System;
using System.Collections.Generic;
using System.Text;

namespace software.amzn.spapi.Auth
{
    public interface RateLimitConfiguration
    {
        int getRateLimitPermit();
        int getTimeOut();
    }
}