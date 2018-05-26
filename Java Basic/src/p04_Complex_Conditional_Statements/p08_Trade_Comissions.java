package p04_Complex_Conditional_Statements;

import java.util.Scanner;

public class p08_Trade_Comissions {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        String town = console.nextLine().toLowerCase();
        double volume = Double.parseDouble(console.nextLine());

        double commission = -1;

        switch (town) {
            case "sofia":
                if (volume >= 0 && volume <= 500) {
                    commission = volume * 0.05;
                } else if (volume > 500 && volume <= 1000) {
                    commission = volume * 0.07;
                } else if (volume > 1000 && volume <= 10000) {
                    commission = volume * 0.08;
                } else if (volume > 10000) {
                    commission = volume * 0.12;
                }
                break;
            case "varna":
                if (volume >= 0 && volume <= 500) {
                    commission = volume * 0.045;
                } else if (volume > 500 && volume <= 1000) {
                    commission = volume * 0.075;
                } else if (volume > 1000 && volume <= 10000) {
                    commission = volume * 0.1;
                } else if (volume > 10000) {
                    commission = volume * 0.13;
                }
                break;
            case "plovdiv":
                if (volume >= 0 && volume <= 500) {
                    commission = volume * 0.055;
                } else if (volume > 500 && volume <= 1000) {
                    commission = volume * 0.08;
                } else if (volume > 1000 && volume <= 10000) {
                    commission = volume * 0.12;
                } else if (volume > 10000) {
                    commission = volume * 0.145;
                }
                break;
        }
        if (commission >= 0) {
            System.out.printf("%.2f", commission);
        } else {
            System.out.println("error");
        }
    }
}
