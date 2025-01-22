<?php
/**
 * FileContentsTest
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
use OpenAPI\Client\Model\merchantFulfillment\FileContents;

/**
 * FileContentsTest Class Doc Comment
 *
 * @category    Class
 * @description The document data and checksum.
 * @package     OpenAPI\Client
 */
class FileContentsTest extends TestCase
{

    private FileContents $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FileContents();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FileContents"
     */
    public function testFileContents()
    {
        $this->assertInstanceOf(FileContents::class, $this->model);
    }

    /**
     * Test attribute "contents"
     */
    public function testPropertyContents()
    {
        $testValue = 'test';
        
        $this->model->setContents($testValue);
        $this->assertEquals($testValue, $this->model->getContents());
    }

    /**
     * Test attribute "file_type"
     */
    public function testPropertyFileType()
    {
        $enumInstance = new \OpenAPI\Client\Model\merchantFulfillment\FileType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setFileType($testValue);
        $this->assertEquals($testValue, $this->model->getFileType());
    }

    /**
     * Test attribute "checksum"
     */
    public function testPropertyChecksum()
    {
        $testValue = 'test';
        
        $this->model->setChecksum($testValue);
        $this->assertEquals($testValue, $this->model->getChecksum());
    }
}
