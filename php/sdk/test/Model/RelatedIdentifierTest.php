<?php
/**
 * RelatedIdentifierTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\finances\v2024_06_19\RelatedIdentifier;

/**
 * RelatedIdentifierTest Class Doc Comment
 *
 * @category    Class
 * @description Related business identifier of the transaction.
 * @package     OpenAPI\Client
 */
class RelatedIdentifierTest extends TestCase
{

    private RelatedIdentifier $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new RelatedIdentifier();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "RelatedIdentifier"
     */
    public function testRelatedIdentifier()
    {
        $this->assertInstanceOf(RelatedIdentifier::class, $this->model);
    }

    /**
     * Test attribute "related_identifier_name"
     */
    public function testPropertyRelatedIdentifierName()
    {
        $enumInstance = new RelatedIdentifier();
        $allowedValues = $enumInstance->getRelatedIdentifierNameAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setRelatedIdentifierName($testValue);
        $this->assertEquals($testValue, $this->model->getRelatedIdentifierName());
    }

    /**
     * Test attribute "related_identifier_value"
     */
    public function testPropertyRelatedIdentifierValue()
    {
        $testValue = 'test';
        
        $this->model->setRelatedIdentifierValue($testValue);
        $this->assertEquals($testValue, $this->model->getRelatedIdentifierValue());
    }
}
