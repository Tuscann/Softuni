package p02_Simple_Calculations;

import java.util.Scanner;

public class p19_Alcohol_Market {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Double first = Double.parseDouble(scanner.nextLine());
        Double second = Double.parseDouble(scanner.nextLine());
        Double third = Double.parseDouble(scanner.nextLine());
        Double four = Double.parseDouble(scanner.nextLine());
        Double five = Double.parseDouble(scanner.nextLine());

        Double rakia = four * (first / 2);
        Double vino = third * (first / 2 - 0.4 * first / 2);
        Double bira = second * (first / 2 - 0.8 * first / 2);
        Double uuskii = first * five;

        System.out.printf("%.2f",rakia + vino + bira + uuskii);
    }
}