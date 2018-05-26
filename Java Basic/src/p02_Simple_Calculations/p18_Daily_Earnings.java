package p02_Simple_Calculations;

import java.util.Scanner;

public class p18_Daily_Earnings {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        int workdays = Integer.parseInt(scanner.nextLine());
        double moneyPerDay = Double.parseDouble(scanner.nextLine());
        double currencyRate = Double.parseDouble(scanner.nextLine());

        double monthSalary = workdays * moneyPerDay;
        double moneyPerYear = monthSalary * 14.5;
        double taxes = 0.25 * moneyPerYear;
        double netSalary = moneyPerYear - taxes;
        double salaryInLeva = netSalary * currencyRate;

        double average = salaryInLeva / 365;
        System.out.printf("%.2f", average);
    }
}
