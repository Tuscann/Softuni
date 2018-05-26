package p07_Advanced_Loops;

import java.util.Scanner;

public class p15_Stupid_Password_Generator {
    public static void main(String[] args) {
        Scanner input= new Scanner(System.in);

        Integer n = Integer.parseInt(input.nextLine());
        Integer l = Integer.parseInt(input.nextLine());

        for (int d1 = 1; d1 <= n; d1++)
        {
            for (int d2 = 1; d2 <= n; d2++)
            {
                for (Character l1 = 'a'; l1 < 'a' + l; l1++)
                {
                    for (Character l2 = 'a'; l2 < 'a' + l; l2++)
                    {
                        for (int d3 = Math.max(d1, d2) + 1; d3 <= n; d3++)
                        {
                            System.out.printf("%d%d%s%s%d ",d1,d2,l1,l2,d3);
                        }
                    }
                }
            }
        }
    }
}
