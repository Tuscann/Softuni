package p05_Simple_Loops;

import java.util.Scanner;  // ???????

public class p15_Cake {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        int weight = Integer.parseInt(console.nextLine());
        int lenght = Integer.parseInt(console.nextLine());

        long cakeSize = weight * lenght;
        boolean finished = true;

        while (true)
        {
            String current = console.nextLine();
            if (current.equals("STOP"))
            {
                break;
            }
            cakeSize -= Integer.parseInt(console.nextLine());
            if (cakeSize < 0)
            {
                finished = false;
                break;
            }
        }
        if (!finished)
        {
            System.out.printf("No more cake left! You need %d pieces more.", Math.abs(cakeSize));
        }
        else
        {
            System.out.printf("%d pieces are left.", cakeSize);
        }
    }
}
