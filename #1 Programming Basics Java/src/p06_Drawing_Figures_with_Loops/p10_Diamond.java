package p06_Drawing_Figures_with_Loops;

import java.util.Scanner;

public class p10_Diamond {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        Integer number = Integer.parseInt(input.nextLine());
        if (number == 1) {
            System.out.print("*");
        } else if (number == 2) {
            System.out.print("**");
        } else {
            if (number % 2 == 0)
            {
                for (int i = 0; i < number / 2; i++)
                {
                    Integer numberOfDashes = i * 2;
                    Integer numberOfDashesOutside = number - 2 - numberOfDashes;
                    System.out.printf("%s*%s*%s\n",repeatStr("-",numberOfDashesOutside/2),repeatStr("-",numberOfDashes),repeatStr("-",numberOfDashesOutside/2));
                }
                for (int i = (number - 1) / 2 - 1; i >= 0; i--)
                {
                    Integer numberOfDashes = i * 2;
                    Integer numberOfDashesOutside = number - 2 - numberOfDashes;
                    System.out.printf("%s",repeatStr("-",numberOfDashesOutside / 2));
                    System.out.print("*");
                    System.out.printf("%s",repeatStr("-",numberOfDashes));
                    System.out.print("*");
                    System.out.printf("%s\n",repeatStr("-",numberOfDashesOutside / 2));
                }
            } else {
                System.out.printf("%s*%s\n",repeatStr("-",(number - 1) / 2),repeatStr("-",(number - 1) / 2));

                Integer rows = (number - 1) / 2;

                for (int currentRow = 0; currentRow < rows; currentRow++) {
                    Integer numberOfDashes = (currentRow * 2) + 1;
                    Integer numberOfDashesOutside = number - 2 - numberOfDashes;
                    System.out.printf("%s*%s*%s\n",repeatStr("-",numberOfDashesOutside / 2),repeatStr("-",numberOfDashes),repeatStr("-",numberOfDashesOutside/2));
                }
                for (int currentRow = rows - 2; currentRow >= 0; currentRow--) {
                    Integer numberOfDashes = (currentRow * 2) + 1;
                    Integer numberOfDashesOutside = number - 2 - numberOfDashes;
                    System.out.printf("%s*%s*%s\n",repeatStr("-",numberOfDashesOutside / 2),repeatStr("-",numberOfDashes),repeatStr("-",numberOfDashesOutside/2));
                }
                System.out.printf("%s*%s\n",repeatStr("-",(number - 1) / 2),repeatStr("-",(number - 1) / 2));

            }
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
