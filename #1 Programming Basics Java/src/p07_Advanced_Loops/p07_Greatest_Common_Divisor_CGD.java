package p07_Advanced_Loops;

import java.util.Scanner;

public class p07_Greatest_Common_Divisor_CGD {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int a = Integer.parseInt(scanner.nextLine());
        int b = Integer.parseInt(scanner.nextLine());
        while (b != 0) {
            int oldB = b;
            b = a % b;
            a = oldB;
        }
        System.out.println("GCD = " + a);
    }
}
