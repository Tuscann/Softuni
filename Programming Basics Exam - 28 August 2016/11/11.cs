using System;
class Program
{
    static void Main()
    {
        var n = int.Parse(Console.ReadLine());
        var m = double.Parse(Console.ReadLine());
        var dolar = double.Parse(Console.ReadLine());

        var total = (n * m) * 12 + (n * m) * 2.5;
        var danak = 0.25 * total;
        var ostatak = (total - danak)*dolar;
        var den = ostatak / 365;

        Console.WriteLine("{0:f2}",den);
    }
}