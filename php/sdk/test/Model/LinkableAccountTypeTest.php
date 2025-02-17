<?php
/**
 * LinkableAccountTypeTest
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
use SpApi\Model\shipping\v2\LinkableAccountType;

/**
 * LinkableAccountTypeTest Class Doc Comment
 *
 * @category    Class
 * @description Info About Linkable Account Type
 * @package     SpApi
 */
class LinkableAccountTypeTest extends TestCase
{

    private LinkableAccountType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new LinkableAccountType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "LinkableAccountType"
     */
    public function testLinkableAccountType()
    {
        $this->assertInstanceOf(LinkableAccountType::class, $this->model);
    }

    /**
     * Test attribute "account_type"
     */
    public function testPropertyAccountType()
    {
        $enumInstance = new \SpApi\Model\shipping\v2\AccountType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setAccountType($testValue);
        $this->assertEquals($testValue, $this->model->getAccountType());
    }

    /**
     * Test attribute "carrier_account_inputs"
     */
    public function testPropertyCarrierAccountInputs()
    {
        $testValue = [];
        
        $this->model->setCarrierAccountInputs($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierAccountInputs());
    }
}
