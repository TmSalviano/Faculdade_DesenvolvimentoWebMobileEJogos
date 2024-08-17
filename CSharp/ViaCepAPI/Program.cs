using System;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        string format;

        Console.WriteLine("Welcome to the zip code Getter! Type a Brazilian zip code to retrieve its info!");
        Console.WriteLine("     The zip code in Brazil must have:");
        Console.WriteLine("         1. Exactly 8 digits.");
        Console.WriteLine("         2. Only numbers.");
        Console.WriteLine("         3. No empty space.");

        Console.WriteLine("Insert the desired zip code: ");
        string zipCode = Console.ReadLine() ?? "";

        Console.WriteLine("Do you want to return JSON or XML?");
        format = (Console.ReadLine() ?? "").ToLower().StartsWith("x") ? "/xml" : "/json";

        if (zipCode.Length != 8 || !long.TryParse(zipCode, out _))
        {
            Console.WriteLine("Invalid zip code format. It must have exactly 8 digits and contain only numbers.");
            return;
        }

        using (var client = new HttpClient())
        {
            client.BaseAddress = new Uri("https://viacep.com.br/ws/");
            string requestUri = zipCode + format;

            Uri fullUri;
            try
            {
                fullUri = new Uri(requestUri, UriKind.Relative);
            }
            catch (UriFormatException ex)
            {
                Console.WriteLine($"Error with URI format: {ex.Message}");
                return;
            }

            try
            {
                HttpResponseMessage response = await client.GetAsync(fullUri);

                response.EnsureSuccessStatusCode();

                if (format == "/json")
                {
                    var data = await response.Content.ReadFromJsonAsync<dynamic>();
                    Console.WriteLine(data);
                }
                else
                {
                    string xmlData = await response.Content.ReadAsStringAsync();
                    Console.WriteLine(xmlData);
                }
            }
            catch (HttpRequestException e)
            {
                Console.WriteLine($"Error in the request: {e.Message}");
            }
        }
    }
}
