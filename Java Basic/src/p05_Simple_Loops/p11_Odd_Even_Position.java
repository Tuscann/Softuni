package p05_Simple_Loops;

import java.util.Arrays;
import java.util.Scanner;

public class p11_Odd_Even_Position {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int input = Integer.parseInt(console.nextLine());
        double sumEven = 0.0;
        double sumOdd = 0.0;
        int ol = (input == 0) ? 0 : (input + 1) / 2;
        int el = (input < 2) ? 0 : input / 2;

        double[] odds = new double[ol];
        double[] evens = new double[el];

        for (int i = 0; i < input; i++) {
            double in = Double.parseDouble(console.nextLine());
            if (i % 2 != 0) {
                sumEven += in;
                evens[i / 2] = in;
            } else {
                sumOdd += in;
                odds[(i + 1) / 2] = in;
            }
        }

        if (ol > 1) {
            Arrays.sort(odds);
        }
        if (el > 1) {
            Arrays.sort(evens);
        }

        String OddSum = "";
        if (sumOdd % 1 == 0.0) {
            OddSum = "OddSum=" + Integer.toString((int) sumOdd) + ",";
        } else {
            OddSum = "OddSum=" + Double.toString(sumOdd) + ",";
        }
        System.out.println(OddSum);
        String OddMin = "";
        String OddMax = "";
        if (ol > 0) {
            double minOdd = odds[0];
            double maxOdd = odds[ol - 1];
            if (minOdd % 1 == 0.0) {
                OddMin = "OddMin=" + Integer.toString((int) minOdd) + ",";
            } else {
                OddMin = "OddMin=" + Double.toString(minOdd) + ",";
            }
            if (maxOdd % 1 == 0.0) {
                OddMax = "OddMax=" + Integer.toString((int) maxOdd) + ",";
            } else {
                OddMax = "OddMax=" + Double.toString(maxOdd) + ",";
            }
        } else {
            OddMin = "OddMin=No,";
            OddMax = "OddMax=No,";
        }
        System.out.println(OddMin);
        System.out.println(OddMax);
        String EvenSum = "";
        if (sumEven % 1 == 0.0) {
            EvenSum = "EvenSum=" + Integer.toString((int) sumEven) + ",";
        } else {
            EvenSum = "EvenSum=" + Double.toString(sumEven) + ",";
        }
        System.out.println(EvenSum);
        String EvenMin = "";
        String EvenMax = "";
        if (el > 0) {
            double minEven = evens[0];
            double maxEven = evens[el - 1];
            if (minEven % 1 == 0.0) {
                EvenMin = "EvenMin=" + Integer.toString((int) minEven) + ",";
            } else {
                EvenMin = "EvenMin=" + Double.toString(minEven) + ",";
            }
            if (maxEven % 1 == 0.0) {
                EvenMax = "EvenMax=" + Integer.toString((int) maxEven);
            } else {
                EvenMax = "EvenMax=" + Double.toString(maxEven);
            }
        } else {
            EvenMin = "EvenMin=No,";
            EvenMax = "EvenMax=No";
        }
        System.out.println(EvenMin);
        System.out.println(EvenMax);
    }
}
