<?php
/**
 * PackageDocumentTest
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
use OpenAPI\Client\Model\shipping\PackageDocument;

/**
 * PackageDocumentTest Class Doc Comment
 *
 * @category    Class
 * @description A document related to a package.
 * @package     OpenAPI\Client
 */
class PackageDocumentTest extends TestCase
{

    private PackageDocument $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PackageDocument();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PackageDocument"
     */
    public function testPackageDocument()
    {
        $this->assertInstanceOf(PackageDocument::class, $this->model);
    }

    /**
     * Test attribute "type"
     */
    public function testPropertyType()
    {
        $enumInstance = new \OpenAPI\Client\Model\shipping\DocumentType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setType($testValue);
        $this->assertEquals($testValue, $this->model->getType());
    }

    /**
     * Test attribute "format"
     */
    public function testPropertyFormat()
    {
        $enumInstance = new \OpenAPI\Client\Model\shipping\DocumentFormat();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setFormat($testValue);
        $this->assertEquals($testValue, $this->model->getFormat());
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
}
