package p06_Drawing_Figures_with_Loops;

import java.util.Scanner;

public class p06_Rhombus_of_Stars {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        Integer side = Integer.parseInt(console.nextLine());

        for (int row = 0; row < side; row++)
        {
            System.out.print(repeatStr(" ",side - row - 1));

            for (int numberOfSymbols = 0; numberOfSymbols <= row; numberOfSymbols++)
            {
                System.out.print(repeatStr("* ", 1));
            }
            System.out.println();
        }
        for (int row = side - 1; row > 0; row--)
        {
            System.out.print(repeatStr(" ",side - row));
            for (int numberOfSymbols = row; numberOfSymbols > 0; numberOfSymbols--)
            {
                System.out.print(repeatStr("* ", 1));
            }
            System.out.println();
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
