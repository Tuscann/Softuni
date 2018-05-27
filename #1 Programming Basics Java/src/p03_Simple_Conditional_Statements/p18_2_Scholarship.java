package p03_Simple_Conditional_Statements;

import java.util.Scanner;

public class p18_2_Scholarship {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        double leva = Double.parseDouble(input.nextLine());
        double averageGrade = Double.parseDouble(input.nextLine());
        double minumSalary = Double.parseDouble(input.nextLine());

        if (averageGrade <= 4.50) {
            System.out.println("You cannot get a scholarship!");
        } else if (averageGrade < 5.50) {
            if (leva > minumSalary) {
                System.out.println("You cannot get a scholarship!");
            } else {
                System.out.printf("You get a Social scholarship %.0f BGN\n", Math.floor(0.35 * minumSalary));
            }
        } else if (averageGrade >= 5.50) {
            if (leva < minumSalary) {
                double exselentScolarship1 = Math.floor(averageGrade * 25);
                double exselentScolarship2 = Math.floor(0.35 * minumSalary);

                double scholarship = Math.max(exselentScolarship1, exselentScolarship2);

                if (exselentScolarship1 == scholarship) {
                    System.out.printf("You get a scholarship for excellent results %.0f BGN\n", scholarship);

                } else if (exselentScolarship2 == scholarship) {
                    System.out.printf("You get a Social scholarship %.0f BGN\n", scholarship);
                }
            } else {
                double scolarship = Math.floor(averageGrade * 25);
                System.out.printf("You get a scholarship for excellent results %.0f BGN\n", scolarship);
            }
        }
    }
}
