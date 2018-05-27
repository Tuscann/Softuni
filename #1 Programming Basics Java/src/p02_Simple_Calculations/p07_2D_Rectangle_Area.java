package p02_Simple_Calculations;

import java.util.Scanner;

public class p07_2D_Rectangle_Area {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        Double x1 = Double.parseDouble(input.nextLine());
        Double y1 = Double.parseDouble(input.nextLine());
        Double x2 = Double.parseDouble(input.nextLine());
        Double y2 = Double.parseDouble(input.nextLine());

        Double area = Math.abs(x1 - x2) * Math.abs(y1 - y2);
        Double perimeter = 2 * (Math.abs(x1 - x2) + Math.abs(y1 - y2));

        System.out.println(area);
        System.out.println(perimeter);
    }
}