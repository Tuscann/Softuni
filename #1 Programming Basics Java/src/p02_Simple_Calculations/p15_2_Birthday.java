package p02_Simple_Calculations;

import java.util.Scanner;

public class p15_2_Birthday {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int length = Integer.parseInt(scanner.nextLine());
        int weight = Integer.parseInt(scanner.nextLine());
        int height = Integer.parseInt(scanner.nextLine());
        Double prosent = Double.parseDouble(scanner.nextLine()) / 100;

        double sum = length * weight * height * 0.001 * (1 - prosent);
        System.out.printf("%.3f", sum);
    }
}
