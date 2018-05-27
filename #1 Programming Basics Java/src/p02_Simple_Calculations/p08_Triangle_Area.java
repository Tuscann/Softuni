package p02_Simple_Calculations;

import java.util.Scanner;

public class p08_Triangle_Area {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        Double triangleSide = Double.parseDouble(input.nextLine());
        Double height = Double.parseDouble(input.nextLine());

        Double area = (triangleSide * height) / 2;

        System.out.printf("Triangle area = %.2f", area);
    }
}