package p03_Simple_Conditional_Statements;

import java.util.Scanner;

public class p13_Area_Of_Figures {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        String figure = input.nextLine();

        switch (figure) {
            case "square":
                Double side = Double.parseDouble(input.nextLine());

                System.out.println(side * side);
                break;
            case "rectangle": {
                Double side1 = Double.parseDouble(input.nextLine());
                Double side2 = Double.parseDouble(input.nextLine());

                System.out.println(side1 * side2);
                break;
            }
            case "circle":
                Double r = Double.parseDouble(input.nextLine());
                System.out.println(Math.PI * r * r);
                break;
            case "triangle": {
                Double side1 = Double.parseDouble(input.nextLine());
                Double side2 = Double.parseDouble(input.nextLine());

                System.out.println(side1 * side2 / 2);
                break;
            }
        }
    }
}
