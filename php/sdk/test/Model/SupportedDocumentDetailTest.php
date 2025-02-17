<?php
/**
 * SupportedDocumentDetailTest
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
use SpApi\Model\shipping\v2\SupportedDocumentDetail;

/**
 * SupportedDocumentDetailTest Class Doc Comment
 *
 * @category    Class
 * @description The supported document types for a service offering.
 * @package     SpApi
 */
class SupportedDocumentDetailTest extends TestCase
{

    private SupportedDocumentDetail $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SupportedDocumentDetail();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SupportedDocumentDetail"
     */
    public function testSupportedDocumentDetail()
    {
        $this->assertInstanceOf(SupportedDocumentDetail::class, $this->model);
    }

    /**
     * Test attribute "name"
     */
    public function testPropertyName()
    {
        $enumInstance = new \SpApi\Model\shipping\v2\DocumentType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setName($testValue);
        $this->assertEquals($testValue, $this->model->getName());
    }

    /**
     * Test attribute "is_mandatory"
     */
    public function testPropertyIsMandatory()
    {
        $testValue = true;
        
        $this->model->setIsMandatory($testValue);
        $this->assertEquals($testValue, $this->model->getIsMandatory());
    }
}
