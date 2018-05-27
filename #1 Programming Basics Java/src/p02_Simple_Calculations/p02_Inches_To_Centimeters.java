package p02_Simple_Calculations;

import java.util.Scanner; // 100/100

public class p02_Inches_To_Centimeters {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("inches: ");
        Double inches = Double.parseDouble(input.nextLine());
        Double centimeters = inches * 2.54;
        System.out.println("centimeters = " + centimeters);
    }
}