package p06_Drawing_Figures_with_Loops;

import java.util.Scanner;

public class p07_Christmas_Tree {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        Integer n = Integer.parseInt(console.nextLine());

        for (int i = 0; i <= n; i++) {
            System.out.printf("%s%s | %s\n",repeatStr(" ",n-i),repeatStr("*",i),repeatStr("*",i));
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
