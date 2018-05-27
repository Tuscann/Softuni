package p02_Simple_Calculations;

import java.util.Scanner;

public class p05_Trapeziod_Area {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        double b1 = Double.parseDouble(input.nextLine());
        double b2 = Double.parseDouble(input.nextLine());
        double h = Double.parseDouble(input.nextLine());

        Double area = (b1 + b2) * h / 2;
        System.out.println(area);
    }
}