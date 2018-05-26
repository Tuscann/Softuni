package p03_Simple_Conditional_Statements;

import java.util.Scanner;

public class p02_Excellent_or_Not {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        double grade = Double.parseDouble(input.nextLine());

        if (grade >= 5.50 && grade <= 6.00) {
            System.out.print("Excellent!");
        }
        else if (grade < 5.50 && grade >=2.00){
            System.out.print("Not excellent.");
        }
    }
}
