using System;
class Program
{
    static void Main()
    {
        int hours = int.Parse(Console.ReadLine());
        int days = int.Parse(Console.ReadLine());
        int employer = int.Parse(Console.ReadLine());

        var realHours = (0.90 * days) * 8;
        var extraHours = employer * (2 * days);

        var total = Math.Floor(realHours + extraHours);

        if (total >= hours)
        {
            Console.WriteLine("Yes!{0} hours left.", total - hours);
        }
        else
        {
            Console.WriteLine("Not enough time!{0} hours needed.", hours - total);
        }
    }
}
