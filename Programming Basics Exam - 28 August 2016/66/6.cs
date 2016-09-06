using System;
class Program
    {
        static void Main()
        {
            int n = int.Parse(Console.ReadLine());

            int first = n / 100;
            int secound = (n / 10) % 10;
            int third = n % 10;           

            int row = first + secound;
            int coloum = first + third;

            for (int i = 0; i < row; i++)
            {
                for (int j = 0; j < coloum; j++)
                {
                    if (n % 5 == 0)
                    {
                        n = n - first;
                    }
                    else if (n % 3 == 0)
                    {
                        n = n - secound;
                    }                    
                    else
                    {
                        n = n + third;
                    }                    
                    Console.Write("{0} ",n);                    
                }
                Console.WriteLine();
            }
        }
    }