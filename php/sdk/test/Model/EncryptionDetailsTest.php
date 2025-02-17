<?php
/**
 * EncryptionDetailsTest
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
use SpApi\Model\services\v1\EncryptionDetails;

/**
 * EncryptionDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Encryption details for required client-side encryption and decryption of document contents.
 * @package     SpApi
 */
class EncryptionDetailsTest extends TestCase
{

    private EncryptionDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new EncryptionDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "EncryptionDetails"
     */
    public function testEncryptionDetails()
    {
        $this->assertInstanceOf(EncryptionDetails::class, $this->model);
    }

    /**
     * Test attribute "standard"
     */
    public function testPropertyStandard()
    {
        $enumInstance = new EncryptionDetails();
        $allowedValues = $enumInstance->getStandardAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setStandard($testValue);
        $this->assertEquals($testValue, $this->model->getStandard());
    }

    /**
     * Test attribute "initialization_vector"
     */
    public function testPropertyInitializationVector()
    {
        $testValue = 'test';
        
        $this->model->setInitializationVector($testValue);
        $this->assertEquals($testValue, $this->model->getInitializationVector());
    }

    /**
     * Test attribute "key"
     */
    public function testPropertyKey()
    {
        $testValue = 'test';
        
        $this->model->setKey($testValue);
        $this->assertEquals($testValue, $this->model->getKey());
    }
}
