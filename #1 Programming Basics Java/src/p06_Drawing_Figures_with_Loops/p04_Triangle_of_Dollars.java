package p06_Drawing_Figures_with_Loops;

import java.util.Scanner;

public class p04_Triangle_of_Dollars {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        Integer n = Integer.parseInt(console.nextLine());

        for (int i = 0; i <= n; i++) {
            for (int j = 0; j < i; j++) {
                System.out.println(repeatStr(i+j));
                break;
            }
        }
    }

    private static String repeatStr(int count) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < count; i++) {
            sb.append("$ ");
        }
        return sb.toString();
    }
}
