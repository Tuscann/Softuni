package p07_Advanced_Loops;

import java.util.Scanner;

public class p08_Factorial2 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        Integer n = Integer.parseInt(input.nextLine());

        Integer factorial = 1;
        for (int i = 1; i <= n; i++) {
            factorial = factorial * i;
        }
        System.out.printf("%d",factorial);
    }
}
