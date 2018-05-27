package p02_Simple_Calculations;

import java.util.Scanner;

public class p09_Celsius_to_Fahrenheit {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        Double Celsius = Double.parseDouble(input.nextLine());
        Double fahrenheit = 32 + (Celsius * 9 / 5);

        System.out.printf("%.2f", fahrenheit);
    }
}