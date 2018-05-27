package p02_Simple_Calculations;

import java.util.Scanner;

public class p10_Radians_to_Degrees {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        Double radians = Double.parseDouble(input.nextLine());

        Double degree = radians / (Math.PI / 180.0);

        System.out.println(degree);
    }
}
