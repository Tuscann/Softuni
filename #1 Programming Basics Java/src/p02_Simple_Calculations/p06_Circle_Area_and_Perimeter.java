package p02_Simple_Calculations;

import java.util.Scanner;

public class p06_Circle_Area_and_Perimeter {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        Double r = input.nextDouble();

        Double area = Math.PI * r * r;
        Double perimeter = 2 * Math.PI * r;

        System.out.printf("Area = %f\n",area);
        System.out.printf("Perimeter = %f",perimeter);
    }
}
