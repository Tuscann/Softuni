package p02_Simple_Calculations;

import java.util.Scanner;

public class p11_USD_to_BGN {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        Double dollars = Double.parseDouble(input.nextLine());

        Double lev = dollars * 1.79549;
        System.out.printf("%.2f BGN", lev);
    }
}
