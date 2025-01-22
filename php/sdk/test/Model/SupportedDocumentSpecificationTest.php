<?php
/**
 * SupportedDocumentSpecificationTest
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
use OpenAPI\Client\Model\shipping\SupportedDocumentSpecification;

/**
 * SupportedDocumentSpecificationTest Class Doc Comment
 *
 * @category    Class
 * @description Document specification that is supported for a service offering.
 * @package     OpenAPI\Client
 */
class SupportedDocumentSpecificationTest extends TestCase
{

    private SupportedDocumentSpecification $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SupportedDocumentSpecification();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SupportedDocumentSpecification"
     */
    public function testSupportedDocumentSpecification()
    {
        $this->assertInstanceOf(SupportedDocumentSpecification::class, $this->model);
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
     * Test attribute "size"
     */
    public function testPropertySize()
    {
        
        $testValue = new \OpenAPI\Client\Model\shipping\DocumentSize();
        
        $this->model->setSize($testValue);
        $this->assertEquals($testValue, $this->model->getSize());
    }

    /**
     * Test attribute "print_options"
     */
    public function testPropertyPrintOptions()
    {
        $testValue = [];
        
        $this->model->setPrintOptions($testValue);
        $this->assertEquals($testValue, $this->model->getPrintOptions());
    }
}
