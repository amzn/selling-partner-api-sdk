<?php
/**
 * DocumentFormatTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\shipping\v2\DocumentFormat;

/**
 * DocumentFormatTest Class Doc Comment
 *
 * @category    Class
 * @description The file format of the document.
 * @package     SpApi
 */
class DocumentFormatTest extends TestCase
{

    private DocumentFormat $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DocumentFormat();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DocumentFormat"
     */
    public function testDocumentFormat()
    {
        $this->assertInstanceOf(DocumentFormat::class, $this->model);
    }
}
