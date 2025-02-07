<?php
/**
 * SubstitutionPreferencesTest
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
use OpenAPI\Client\Model\orders\v0\SubstitutionPreferences;

/**
 * SubstitutionPreferencesTest Class Doc Comment
 *
 * @category    Class
 * @description Substitution preferences for an order item.
 * @package     OpenAPI\Client
 */
class SubstitutionPreferencesTest extends TestCase
{

    private SubstitutionPreferences $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SubstitutionPreferences();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SubstitutionPreferences"
     */
    public function testSubstitutionPreferences()
    {
        $this->assertInstanceOf(SubstitutionPreferences::class, $this->model);
    }

    /**
     * Test attribute "substitution_type"
     */
    public function testPropertySubstitutionType()
    {
        $enumInstance = new SubstitutionPreferences();
        $allowedValues = $enumInstance->getSubstitutionTypeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setSubstitutionType($testValue);
        $this->assertEquals($testValue, $this->model->getSubstitutionType());
    }

    /**
     * Test attribute "substitution_options"
     */
    public function testPropertySubstitutionOptions()
    {
        $testValue = [];
        
        $this->model->setSubstitutionOptions($testValue);
        $this->assertEquals($testValue, $this->model->getSubstitutionOptions());
    }
}
