package p05_Simple_Loops;

import java.util.Scanner;

public class p13_Histogram {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int n = Integer.parseInt(console.nextLine());

        double p200 = 0;
        double p400 = 0;
        double p600 = 0;
        double p800 = 0;
        double p1000 = 0;

        for (int i = 0; i < n; i++) {
            Integer current = console.nextInt();
            if (current < 200) {
                p200++;
            } else if (current < 400) {
                p400++;
            } else if (current < 600) {
                p600++;
            } else if (current < 800) {
                p800++;
            } else {
                p1000++;
            }
        }
        System.out.printf("%.2f\n",p200/n*100);
        System.out.printf("%.2f\n",p400/n*100);
        System.out.printf("%.2f\n",p600/n*100);
        System.out.printf("%.2f\n",p800/n*100);
        System.out.printf("%.2f\n",p1000/n*100);
    }
}
