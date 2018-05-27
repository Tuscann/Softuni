package p03_Simple_Conditional_Statements;

import java.util.Scanner;

public class p03_Even_or_Odd {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int n = Integer.parseInt(input.nextLine());

        if (n % 2 == 0) {
            System.out.println("even");
        } else {
            System.out.println("odd");
        }
    }
}
