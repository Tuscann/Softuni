package p06_Drawing_Figures_with_Loops;

import java.util.Scanner;

public class p13_Stop {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());

        int dots = n + 1;
        int underScopes = 2 * n + 1;

        System.out.printf("%s%s%s\n",
                repeatStr(".", n + 1),
                repeatStr("_", underScopes),
                repeatStr(".", n + 1));

        underScopes -= 2;
        dots--;

        for (int i = 0; i < n; i++) {
            System.out.printf("%s//%s\\\\%s",
                    repeatStr(".", dots),
                    repeatStr("_", underScopes),
                    repeatStr(".", dots));
            System.out.println();

            underScopes += 2;
            dots--;
        }

        System.out.printf("//%sSTOP!%s\\\\\n",
                repeatStr("_", ((underScopes - 5) / 2)),
                repeatStr("_", ((underScopes - 5) / 2)));

        for (int i = 0; i < n; i++) {
            System.out.printf("%s\\\\%s//%s",
                    repeatStr(".", i),
                    repeatStr("_", underScopes),
                    repeatStr(".", i));
            System.out.println();
            underScopes -= 2;
        }
    }

    static String repeatStr(String strToRepeat, int count) {
        StringBuilder text = new StringBuilder();
        for (int i = 0; i < count; i++) {
            text.append(strToRepeat);
        }
        return text.toString();
    }
}
