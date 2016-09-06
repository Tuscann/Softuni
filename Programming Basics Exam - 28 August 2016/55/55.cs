using System;
class Program
    {
        static void Main()
        {
            int n = int.Parse(Console.ReadLine());

            Console.WriteLine("{0}**{1}", new string('-', 3 * n), new string('-', 2 * n - 2));
            int d = 1;
            for (int i = 0; i < n - 1; i++)
            {
                Console.WriteLine("{0}*{1}*{2}", new string('-', 3 * n), new string('-', d), new string('-', 2 * n - 2 - d));
                d++;
            }
            for (int i = 0; i < n / 2; i++)
            {
                Console.WriteLine("{0}{1}*{2}", new string('*', 3 * n + 1), new string('-', n - 1), new string('-', n - 1));
            }
            int x = 0, y = 0, z = 0;            
            for (int i = 0; i < n / 2 - 1; i++)
            {
                Console.WriteLine("{0}*{1}*{2}", new string('-', 3 * n + x), new string('-', n - 1 + y), new string('-', n - 1 + z));
                x--; y += 2; z--;
            }
            int a = n / 2 - 1;
            Console.WriteLine("{0}*{1}*{2}", new string('-', (3 * n) - a), new string('*', n - 1 + (a * 2)), new string('-', n - 1 - a));
        }
    }