using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net;.
using System.IO;


namespace ConsultaClima
{
    class program 
    {
        static void Main (string [] args )
{
string url= @"http://api.weatherunlocked.com/api/current/6.250400694961194,-75.56852720625092?app_id=17358b70&app_key=8edf1d22561f1ed377caf67038fe513fAPP_KEY";
WebRequest  webRequest = WebRequest.Create(url);
HttpWebResponse httpWebResponse = null;

httpWebResponse = (HttpWebResponse)webRequest.GetResponse();

string result = string.Empty
using (Stream stream = httpWebResponse.GetResponseStream())
{
    StreamReader streamReader = new StreamReader (stream);
    result = streamReader.ReadToEnd();
    streamReader.Close();
}
}
    }
}

