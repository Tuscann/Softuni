using System;
class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        for (int i = 0; i < n; i++)
        {
            Console.WriteLine("{0}*{1}*{2}", new string('-', 3 * n), new string('-', i), new string('-', 2 * n - 2 - i));
        }
        for (int i = 0; i < n / 2; i++)
        {
            Console.WriteLine("{0}*{1}*{1}", new string('*', n * 3), new string('-', n - 1));
        }
        for (int i = 0; i < n / 2; i++)
        {
            Console.WriteLine("{0}*{1}*{2}", new string('-', (3 * n) - i), new string(i == n / 2 - 1 ? '*' : '-', n - 1 + (i * 2)), new string('-', n - 1 - i));
        }
    }
}