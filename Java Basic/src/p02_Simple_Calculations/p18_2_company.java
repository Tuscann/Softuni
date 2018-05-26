package p02_Simple_Calculations;

import java.util.Scanner;

public class p18_2_company {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Double days = Double.parseDouble(scanner.nextLine());
        Double sladkari = Double.parseDouble(scanner.nextLine());
        Double torti = Double.parseDouble(scanner.nextLine());
        Double gofreti = Double.parseDouble(scanner.nextLine());
        Double palachinki = Double.parseDouble(scanner.nextLine());

        Double sum = (torti * (Double) 45.00 + gofreti * (Double) 5.80 + palachinki * (Double) 3.20) * sladkari * days * (1 - 0.125);
        System.out.printf("%.2f",sum);
    }
}
