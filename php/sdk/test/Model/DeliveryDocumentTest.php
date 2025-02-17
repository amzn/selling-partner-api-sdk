<?php
/**
 * DeliveryDocumentTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\DeliveryDocument;

/**
 * DeliveryDocumentTest Class Doc Comment
 *
 * @category    Class
 * @description A delivery document for a package.
 * @package     SpApi
 */
class DeliveryDocumentTest extends TestCase
{

    private DeliveryDocument $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DeliveryDocument();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DeliveryDocument"
     */
    public function testDeliveryDocument()
    {
        $this->assertInstanceOf(DeliveryDocument::class, $this->model);
    }

    /**
     * Test attribute "document_type"
     */
    public function testPropertyDocumentType()
    {
        $testValue = 'test';
        
        $this->model->setDocumentType($testValue);
        $this->assertEquals($testValue, $this->model->getDocumentType());
    }

    /**
     * Test attribute "url"
     */
    public function testPropertyUrl()
    {
        $testValue = 'test';
        
        $this->model->setUrl($testValue);
        $this->assertEquals($testValue, $this->model->getUrl());
    }
}
