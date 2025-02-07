<?php
/**
 * FileFormatTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\invoices\v2024_06_19\FileFormat;

/**
 * FileFormatTest Class Doc Comment
 *
 * @category    Class
 * @description Supported invoice file extensions.
 * @package     OpenAPI\Client
 */
class FileFormatTest extends TestCase
{

    private FileFormat $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FileFormat();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FileFormat"
     */
    public function testFileFormat()
    {
        $this->assertInstanceOf(FileFormat::class, $this->model);
    }
}
