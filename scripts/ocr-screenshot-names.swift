import AppKit
import Foundation
import Vision

func recognizedText(from imageUrl: URL) throws -> [String] {
  guard let image = NSImage(contentsOf: imageUrl) else {
    throw NSError(domain: "OCR", code: 1, userInfo: [NSLocalizedDescriptionKey: "Unable to load image at \(imageUrl.path)"])
  }

  var rect = NSRect(origin: .zero, size: image.size)
  guard let cgImage = image.cgImage(forProposedRect: &rect, context: nil, hints: nil) else {
    throw NSError(domain: "OCR", code: 2, userInfo: [NSLocalizedDescriptionKey: "Unable to create CGImage for \(imageUrl.path)"])
  }

  let request = VNRecognizeTextRequest()
  request.recognitionLevel = .accurate
  request.usesLanguageCorrection = true

  let handler = VNImageRequestHandler(cgImage: cgImage, options: [:])
  try handler.perform([request])

  return (request.results ?? []).compactMap { observation in
    observation.topCandidates(1).first?.string
  }
}

let arguments = CommandLine.arguments.dropFirst()

guard !arguments.isEmpty else {
  fputs("Usage: swift scripts/ocr-screenshot-names.swift <image-path> [<image-path> ...]\n", stderr)
  exit(1)
}

for rawPath in arguments {
  let imageUrl = URL(fileURLWithPath: rawPath)

  do {
    let lines = try recognizedText(from: imageUrl)
    print("FILE\t\(imageUrl.lastPathComponent)")
    for line in lines.prefix(20) {
      print("TEXT\t\(line)")
    }
  } catch {
    print("FILE\t\(imageUrl.lastPathComponent)")
    print("ERROR\t\(error.localizedDescription)")
  }
}
