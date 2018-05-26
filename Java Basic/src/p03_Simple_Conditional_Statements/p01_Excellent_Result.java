package p03_Simple_Conditional_Statements;

import java.util.Scanner;

public class p01_Excellent_Result {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        double grade = Double.parseDouble(input.nextLine());

        if (grade >= 5.50 && grade <= 6.00) {
            System.out.print("Excellent!");
        }
    }
}
