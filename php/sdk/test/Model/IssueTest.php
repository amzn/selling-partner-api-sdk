<?php
/**
 * IssueTest
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
use OpenAPI\Client\Model\listings\items\Issue;

/**
 * IssueTest Class Doc Comment
 *
 * @category    Class
 * @description An issue with a listings item.
 * @package     OpenAPI\Client
 */
class IssueTest extends TestCase
{

    private Issue $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Issue();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Issue"
     */
    public function testIssue()
    {
        $this->assertInstanceOf(Issue::class, $this->model);
    }

    /**
     * Test attribute "code"
     */
    public function testPropertyCode()
    {
        $testValue = 'test';
        
        $this->model->setCode($testValue);
        $this->assertEquals($testValue, $this->model->getCode());
    }

    /**
     * Test attribute "message"
     */
    public function testPropertyMessage()
    {
        $testValue = 'test';
        
        $this->model->setMessage($testValue);
        $this->assertEquals($testValue, $this->model->getMessage());
    }

    /**
     * Test attribute "severity"
     */
    public function testPropertySeverity()
    {
        $enumInstance = new Issue();
        $allowedValues = $enumInstance->getSeverityAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setSeverity($testValue);
        $this->assertEquals($testValue, $this->model->getSeverity());
    }

    /**
     * Test attribute "attribute_names"
     */
    public function testPropertyAttributeNames()
    {
        $testValue = [];
        
        $this->model->setAttributeNames($testValue);
        $this->assertEquals($testValue, $this->model->getAttributeNames());
    }

    /**
     * Test attribute "categories"
     */
    public function testPropertyCategories()
    {
        $testValue = [];
        
        $this->model->setCategories($testValue);
        $this->assertEquals($testValue, $this->model->getCategories());
    }

    /**
     * Test attribute "enforcements"
     */
    public function testPropertyEnforcements()
    {
        
        $testValue = new \OpenAPI\Client\Model\listings\items\IssueEnforcements();
        
        $this->model->setEnforcements($testValue);
        $this->assertEquals($testValue, $this->model->getEnforcements());
    }
}
