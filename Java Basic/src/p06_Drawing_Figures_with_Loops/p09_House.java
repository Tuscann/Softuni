package p06_Drawing_Figures_with_Loops;

import java.util.Scanner;

public class p09_House {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        Integer n = Integer.parseInt(input.nextLine());
        Integer stars = 1;
        if (n % 2 == 0) {
            stars++;
        }
        for (int i = 0; i < (n + 1) / 2; i++) {
            Integer padding = (n - stars) / 2;
            System.out.printf("%s%s%s\n", repeatStr("-", padding), repeatStr("*", stars), repeatStr("-", padding));
            stars = stars + 2;
        }
        for (int i = 0; i < n / 2; i++) {
            System.out.printf("|%s|\n", repeatStr("*", n - 2));
        }
    }

    private static String repeatStr(String str, int count) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < count; i++) {
            sb.append(str);
        }
        return sb.toString();
    }
}
