package p02_Simple_Calculations;

import java.util.Scanner;

public class p17_Money {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        Integer bitkoins = Integer.parseInt(input.nextLine());
        Double chiniseUana = Double.parseDouble(input.nextLine());
        Double commnins = Double.parseDouble(input.nextLine());

        final Double bitcoin = 1168.00;
        final Double chinseuan = 0.15;
        final Double dolar = 1.76;
        final Double euro = 1.95;

        Double totalBitcoin = bitkoins * bitcoin;
        Double totalUana = chiniseUana * chinseuan * dolar;
        Double total = (totalUana + totalBitcoin) / euro;

        Double t = total - commnins / 100 * total;
        System.out.printf("%.2f",t);
    }
}
